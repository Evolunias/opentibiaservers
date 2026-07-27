import NewSeasonTibiaraPrivateServerKeywordPage, { generateMetadata } from './new-season-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraPrivateServerKeywordPage />;
}
