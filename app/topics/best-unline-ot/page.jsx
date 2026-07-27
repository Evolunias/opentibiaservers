import BestUnlineOtKeywordPage, { generateMetadata } from './best-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineOtKeywordPage />;
}
