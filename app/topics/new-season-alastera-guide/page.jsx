import NewSeasonAlasteraGuideKeywordPage, { generateMetadata } from './new-season-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraGuideKeywordPage />;
}
