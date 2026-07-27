import OfficialCoxaotRulesKeywordPage, { generateMetadata } from './official-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotRulesKeywordPage />;
}
