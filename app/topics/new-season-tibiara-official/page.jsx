import NewSeasonTibiaraOfficialKeywordPage, { generateMetadata } from './new-season-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraOfficialKeywordPage />;
}
