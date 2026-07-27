import NewSeasonThorniaPrivateServerKeywordPage, { generateMetadata } from './new-season-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaPrivateServerKeywordPage />;
}
