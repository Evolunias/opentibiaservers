import NewSeasonThaisotOfficialKeywordPage, { generateMetadata } from './new-season-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotOfficialKeywordPage />;
}
