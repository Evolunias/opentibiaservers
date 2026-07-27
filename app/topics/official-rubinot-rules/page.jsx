import OfficialRubinotRulesKeywordPage, { generateMetadata } from './official-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotRulesKeywordPage />;
}
