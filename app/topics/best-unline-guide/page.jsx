import BestUnlineGuideKeywordPage, { generateMetadata } from './best-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineGuideKeywordPage />;
}
