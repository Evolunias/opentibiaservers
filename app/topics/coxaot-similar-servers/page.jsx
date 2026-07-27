import CoxaotSimilarServersKeywordPage, { generateMetadata } from './coxaot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSimilarServersKeywordPage />;
}
