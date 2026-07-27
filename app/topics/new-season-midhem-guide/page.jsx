import NewSeasonMidhemGuideKeywordPage, { generateMetadata } from './new-season-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemGuideKeywordPage />;
}
