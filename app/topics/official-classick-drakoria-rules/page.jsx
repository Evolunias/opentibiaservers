import OfficialClassickDrakoriaRulesKeywordPage, { generateMetadata } from './official-classick-drakoria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaRulesKeywordPage />;
}
