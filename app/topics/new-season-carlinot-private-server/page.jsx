import NewSeasonCarlinotPrivateServerKeywordPage, { generateMetadata } from './new-season-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotPrivateServerKeywordPage />;
}
