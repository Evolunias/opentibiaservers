import FreshStartArcaniarlClientKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlClientKeywordPage />;
}
