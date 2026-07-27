import NewSeasonClassicusOfficialKeywordPage, { generateMetadata } from './new-season-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusOfficialKeywordPage />;
}
