import NewSeasonEvoleraGuideKeywordPage, { generateMetadata } from './new-season-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraGuideKeywordPage />;
}
