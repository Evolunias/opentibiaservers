import FreshStartCanobOtKeywordPage, { generateMetadata } from './fresh-start-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobOtKeywordPage />;
}
