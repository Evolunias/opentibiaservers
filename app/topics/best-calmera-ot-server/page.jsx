import BestCalmeraOtServerKeywordPage, { generateMetadata } from './best-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtServerKeywordPage />;
}
