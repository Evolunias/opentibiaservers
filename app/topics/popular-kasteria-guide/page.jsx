import PopularKasteriaGuideKeywordPage, { generateMetadata } from './popular-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaGuideKeywordPage />;
}
