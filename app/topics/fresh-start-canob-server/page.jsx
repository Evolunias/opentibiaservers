import FreshStartCanobServerKeywordPage, { generateMetadata } from './fresh-start-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobServerKeywordPage />;
}
