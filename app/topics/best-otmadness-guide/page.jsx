import BestOtmadnessGuideKeywordPage, { generateMetadata } from './best-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessGuideKeywordPage />;
}
