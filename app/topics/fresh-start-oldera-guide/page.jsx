import FreshStartOlderaGuideKeywordPage, { generateMetadata } from './fresh-start-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaGuideKeywordPage />;
}
