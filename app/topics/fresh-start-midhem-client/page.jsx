import FreshStartMidhemClientKeywordPage, { generateMetadata } from './fresh-start-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemClientKeywordPage />;
}
