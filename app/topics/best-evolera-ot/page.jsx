import BestEvoleraOtKeywordPage, { generateMetadata } from './best-evolera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraOtKeywordPage />;
}
