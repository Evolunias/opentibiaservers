import FreshStartMidhemLoginKeywordPage, { generateMetadata } from './fresh-start-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemLoginKeywordPage />;
}
