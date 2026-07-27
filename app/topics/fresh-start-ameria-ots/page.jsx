import FreshStartAmeriaOtsKeywordPage, { generateMetadata } from './fresh-start-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaOtsKeywordPage />;
}
