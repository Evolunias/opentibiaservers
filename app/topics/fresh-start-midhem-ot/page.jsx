import FreshStartMidhemOtKeywordPage, { generateMetadata } from './fresh-start-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemOtKeywordPage />;
}
