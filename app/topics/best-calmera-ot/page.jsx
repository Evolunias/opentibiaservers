import BestCalmeraOtKeywordPage, { generateMetadata } from './best-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtKeywordPage />;
}
