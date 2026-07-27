import OfficialThaisotRulesKeywordPage, { generateMetadata } from './official-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotRulesKeywordPage />;
}
