import NewSeasonArchlightPrivateServerKeywordPage, { generateMetadata } from './new-season-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightPrivateServerKeywordPage />;
}
