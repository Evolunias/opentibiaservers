import FreshStartArcaniarlServerKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlServerKeywordPage />;
}
