import NewSeasonNtoStarPrivateServerKeywordPage, { generateMetadata } from './new-season-nto-star-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarPrivateServerKeywordPage />;
}
