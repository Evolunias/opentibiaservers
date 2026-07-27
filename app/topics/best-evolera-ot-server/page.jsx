import BestEvoleraOtServerKeywordPage, { generateMetadata } from './best-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraOtServerKeywordPage />;
}
