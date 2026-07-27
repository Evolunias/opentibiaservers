import NewSeasonXanteriaPrivateServerKeywordPage, { generateMetadata } from './new-season-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaPrivateServerKeywordPage />;
}
