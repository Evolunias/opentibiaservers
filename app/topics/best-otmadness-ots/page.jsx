import BestOtmadnessOtsKeywordPage, { generateMetadata } from './best-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessOtsKeywordPage />;
}
