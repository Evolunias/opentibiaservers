import FreshStartCanobKeywordPage, { generateMetadata } from './fresh-start-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobKeywordPage />;
}
