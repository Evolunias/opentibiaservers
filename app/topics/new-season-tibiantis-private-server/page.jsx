import NewSeasonTibiantisPrivateServerKeywordPage, { generateMetadata } from './new-season-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisPrivateServerKeywordPage />;
}
