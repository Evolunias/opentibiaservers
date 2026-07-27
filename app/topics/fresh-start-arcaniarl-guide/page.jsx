import FreshStartArcaniarlGuideKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlGuideKeywordPage />;
}
