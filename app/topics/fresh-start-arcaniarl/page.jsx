import FreshStartArcaniarlKeywordPage, { generateMetadata } from './fresh-start-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlKeywordPage />;
}
