import PopularSaintsotGuideKeywordPage, { generateMetadata } from './popular-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotGuideKeywordPage />;
}
