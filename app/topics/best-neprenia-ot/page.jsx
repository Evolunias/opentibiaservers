import BestNepreniaOtKeywordPage, { generateMetadata } from './best-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaOtKeywordPage />;
}
