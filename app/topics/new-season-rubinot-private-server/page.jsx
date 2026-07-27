import NewSeasonRubinotPrivateServerKeywordPage, { generateMetadata } from './new-season-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotPrivateServerKeywordPage />;
}
