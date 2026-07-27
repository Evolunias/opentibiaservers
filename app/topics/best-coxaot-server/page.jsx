import BestCoxaotServerKeywordPage, { generateMetadata } from './best-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotServerKeywordPage />;
}
