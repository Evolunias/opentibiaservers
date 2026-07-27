import NewSeasonClassicusServerKeywordPage, { generateMetadata } from './new-season-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusServerKeywordPage />;
}
