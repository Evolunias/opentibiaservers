import BestOtmadnessKeywordPage, { generateMetadata } from './best-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessKeywordPage />;
}
