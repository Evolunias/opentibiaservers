import FreshStartCanobOtsKeywordPage, { generateMetadata } from './fresh-start-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobOtsKeywordPage />;
}
