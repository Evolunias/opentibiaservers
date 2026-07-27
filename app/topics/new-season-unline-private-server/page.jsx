import NewSeasonUnlinePrivateServerKeywordPage, { generateMetadata } from './new-season-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlinePrivateServerKeywordPage />;
}
