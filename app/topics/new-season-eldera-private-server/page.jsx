import NewSeasonElderaPrivateServerKeywordPage, { generateMetadata } from './new-season-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaPrivateServerKeywordPage />;
}
