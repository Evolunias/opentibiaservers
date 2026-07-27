import NewSeasonKasteriaPrivateServerKeywordPage, { generateMetadata } from './new-season-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaPrivateServerKeywordPage />;
}
