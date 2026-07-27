import NewSeasonLumineraPrivateServerKeywordPage, { generateMetadata } from './new-season-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraPrivateServerKeywordPage />;
}
