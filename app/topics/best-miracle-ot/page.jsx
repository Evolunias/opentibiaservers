import BestMiracleOtKeywordPage, { generateMetadata } from './best-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleOtKeywordPage />;
}
