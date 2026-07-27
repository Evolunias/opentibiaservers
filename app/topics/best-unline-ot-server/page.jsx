import BestUnlineOtServerKeywordPage, { generateMetadata } from './best-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineOtServerKeywordPage />;
}
