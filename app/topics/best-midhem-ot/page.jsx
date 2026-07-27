import BestMidhemOtKeywordPage, { generateMetadata } from './best-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemOtKeywordPage />;
}
