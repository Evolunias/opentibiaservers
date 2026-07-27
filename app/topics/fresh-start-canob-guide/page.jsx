import FreshStartCanobGuideKeywordPage, { generateMetadata } from './fresh-start-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobGuideKeywordPage />;
}
