import BestCalmeraOtClientKeywordPage, { generateMetadata } from './best-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtClientKeywordPage />;
}
