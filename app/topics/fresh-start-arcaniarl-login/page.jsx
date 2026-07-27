import FreshStartArcaniarlLoginKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlLoginKeywordPage />;
}
