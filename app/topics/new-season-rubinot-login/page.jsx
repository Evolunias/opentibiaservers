import NewSeasonRubinotLoginKeywordPage, { generateMetadata } from './new-season-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotLoginKeywordPage />;
}
