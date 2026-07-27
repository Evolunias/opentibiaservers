import FreshStartStatusLatinAmericaKeywordPage, { generateMetadata } from './fresh-start-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusLatinAmericaKeywordPage />;
}
