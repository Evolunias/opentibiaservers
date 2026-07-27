import FreshStartThorniaGuideKeywordPage, { generateMetadata } from './fresh-start-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaGuideKeywordPage />;
}
