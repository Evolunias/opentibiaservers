import PopularRealestaGuideKeywordPage, { generateMetadata } from './popular-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaGuideKeywordPage />;
}
