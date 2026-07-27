import NewSeasonClassicusLoginKeywordPage, { generateMetadata } from './new-season-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusLoginKeywordPage />;
}
