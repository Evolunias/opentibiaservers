import NewSeasonTibiantisLoginKeywordPage, { generateMetadata } from './new-season-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisLoginKeywordPage />;
}
