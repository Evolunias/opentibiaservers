import BestMidhemKeywordPage, { generateMetadata } from './best-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemKeywordPage />;
}
