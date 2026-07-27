import FreshStartMidhemServerKeywordPage, { generateMetadata } from './fresh-start-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemServerKeywordPage />;
}
