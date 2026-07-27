import NewSeasonRealeraPrivateServerKeywordPage, { generateMetadata } from './new-season-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraPrivateServerKeywordPage />;
}
