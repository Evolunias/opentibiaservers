import BestMidhemOtsKeywordPage, { generateMetadata } from './best-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemOtsKeywordPage />;
}
