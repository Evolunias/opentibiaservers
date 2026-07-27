import FreshStartMidhemKeywordPage, { generateMetadata } from './fresh-start-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemKeywordPage />;
}
