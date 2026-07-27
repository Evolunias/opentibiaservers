import NewSeasonClassicusGuideKeywordPage, { generateMetadata } from './new-season-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusGuideKeywordPage />;
}
