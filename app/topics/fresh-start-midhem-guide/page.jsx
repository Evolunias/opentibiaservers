import FreshStartMidhemGuideKeywordPage, { generateMetadata } from './fresh-start-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemGuideKeywordPage />;
}
