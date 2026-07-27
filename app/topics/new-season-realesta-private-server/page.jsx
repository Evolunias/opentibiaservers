import NewSeasonRealestaPrivateServerKeywordPage, { generateMetadata } from './new-season-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaPrivateServerKeywordPage />;
}
