import FreshStartOlderaOtsKeywordPage, { generateMetadata } from './fresh-start-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaOtsKeywordPage />;
}
