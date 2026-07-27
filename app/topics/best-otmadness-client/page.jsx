import BestOtmadnessClientKeywordPage, { generateMetadata } from './best-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessClientKeywordPage />;
}
