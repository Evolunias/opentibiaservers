import NewSeasonMediviaPrivateServerKeywordPage, { generateMetadata } from './new-season-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaPrivateServerKeywordPage />;
}
