import BestMiracleClientKeywordPage, { generateMetadata } from './best-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleClientKeywordPage />;
}
