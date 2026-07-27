import OfficialKasteriaRulesKeywordPage, { generateMetadata } from './official-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaRulesKeywordPage />;
}
