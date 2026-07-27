import BestUnlineOtsKeywordPage, { generateMetadata } from './best-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineOtsKeywordPage />;
}
