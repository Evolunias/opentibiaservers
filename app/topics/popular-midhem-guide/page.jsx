import PopularMidhemGuideKeywordPage, { generateMetadata } from './popular-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemGuideKeywordPage />;
}
