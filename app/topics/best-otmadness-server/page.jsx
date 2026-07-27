import BestOtmadnessServerKeywordPage, { generateMetadata } from './best-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessServerKeywordPage />;
}
