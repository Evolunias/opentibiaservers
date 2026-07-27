import BestMediviaOtsKeywordPage, { generateMetadata } from './best-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaOtsKeywordPage />;
}
