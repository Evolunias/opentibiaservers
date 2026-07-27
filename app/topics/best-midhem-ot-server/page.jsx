import BestMidhemOtServerKeywordPage, { generateMetadata } from './best-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemOtServerKeywordPage />;
}
