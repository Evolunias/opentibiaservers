import BestNepreniaOtsKeywordPage, { generateMetadata } from './best-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaOtsKeywordPage />;
}
