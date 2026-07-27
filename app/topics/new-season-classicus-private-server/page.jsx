import NewSeasonClassicusPrivateServerKeywordPage, { generateMetadata } from './new-season-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusPrivateServerKeywordPage />;
}
