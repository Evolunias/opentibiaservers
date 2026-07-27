import BestBlazeraGuideKeywordPage, { generateMetadata } from './best-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraGuideKeywordPage />;
}
