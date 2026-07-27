import BestOtmadnessWebsiteKeywordPage, { generateMetadata } from './best-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessWebsiteKeywordPage />;
}
