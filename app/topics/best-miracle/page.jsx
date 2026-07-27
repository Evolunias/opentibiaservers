import BestMiracleKeywordPage, { generateMetadata } from './best-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleKeywordPage />;
}
