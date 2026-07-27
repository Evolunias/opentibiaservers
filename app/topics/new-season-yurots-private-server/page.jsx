import NewSeasonYurotsPrivateServerKeywordPage, { generateMetadata } from './new-season-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsPrivateServerKeywordPage />;
}
