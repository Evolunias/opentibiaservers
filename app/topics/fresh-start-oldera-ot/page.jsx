import FreshStartOlderaOtKeywordPage, { generateMetadata } from './fresh-start-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaOtKeywordPage />;
}
