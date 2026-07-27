import NewSeasonTibiaoriginsKeywordPage, { generateMetadata } from './new-season-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaoriginsKeywordPage />;
}
