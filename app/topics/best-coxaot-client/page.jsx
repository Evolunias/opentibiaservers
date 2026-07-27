import BestCoxaotClientKeywordPage, { generateMetadata } from './best-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotClientKeywordPage />;
}
