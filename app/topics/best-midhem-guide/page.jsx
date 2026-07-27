import BestMidhemGuideKeywordPage, { generateMetadata } from './best-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemGuideKeywordPage />;
}
