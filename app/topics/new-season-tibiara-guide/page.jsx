import NewSeasonTibiaraGuideKeywordPage, { generateMetadata } from './new-season-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraGuideKeywordPage />;
}
