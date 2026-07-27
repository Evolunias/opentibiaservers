import PopularRealeraGuideKeywordPage, { generateMetadata } from './popular-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraGuideKeywordPage />;
}
