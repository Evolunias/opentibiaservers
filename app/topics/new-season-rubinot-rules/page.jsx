import NewSeasonRubinotRulesKeywordPage, { generateMetadata } from './new-season-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotRulesKeywordPage />;
}
