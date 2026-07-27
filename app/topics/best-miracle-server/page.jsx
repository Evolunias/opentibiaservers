import BestMiracleServerKeywordPage, { generateMetadata } from './best-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleServerKeywordPage />;
}
