import NewSeasonTibiascapeGuideKeywordPage, { generateMetadata } from './new-season-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeGuideKeywordPage />;
}
