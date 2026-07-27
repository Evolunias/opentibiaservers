import NewSeasonImperianicPrivateServerKeywordPage, { generateMetadata } from './new-season-imperianic-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicPrivateServerKeywordPage />;
}
