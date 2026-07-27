import NewSeasonTibijkaOfficialKeywordPage, { generateMetadata } from './new-season-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOfficialKeywordPage />;
}
