import NewSeasonCanobPrivateServerKeywordPage, { generateMetadata } from './new-season-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobPrivateServerKeywordPage />;
}
