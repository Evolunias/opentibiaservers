import PopularUnlineGuideKeywordPage, { generateMetadata } from './popular-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineGuideKeywordPage />;
}
