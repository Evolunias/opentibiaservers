import FreshStartOlderaKeywordPage, { generateMetadata } from './fresh-start-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaKeywordPage />;
}
