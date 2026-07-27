import BestOtmadnessOtKeywordPage, { generateMetadata } from './best-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessOtKeywordPage />;
}
