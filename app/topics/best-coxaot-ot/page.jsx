import BestCoxaotOtKeywordPage, { generateMetadata } from './best-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotOtKeywordPage />;
}
