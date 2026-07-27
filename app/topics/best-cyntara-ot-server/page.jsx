import BestCyntaraOtServerKeywordPage, { generateMetadata } from './best-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraOtServerKeywordPage />;
}
