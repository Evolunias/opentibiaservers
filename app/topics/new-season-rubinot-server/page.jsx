import NewSeasonRubinotServerKeywordPage, { generateMetadata } from './new-season-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotServerKeywordPage />;
}
