import OfficialCarlinotRulesKeywordPage, { generateMetadata } from './official-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotRulesKeywordPage />;
}
