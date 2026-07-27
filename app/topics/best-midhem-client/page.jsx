import BestMidhemClientKeywordPage, { generateMetadata } from './best-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemClientKeywordPage />;
}
