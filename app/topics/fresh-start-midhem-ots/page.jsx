import FreshStartMidhemOtsKeywordPage, { generateMetadata } from './fresh-start-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemOtsKeywordPage />;
}
