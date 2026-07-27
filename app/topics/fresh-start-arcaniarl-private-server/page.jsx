import FreshStartArcaniarlPrivateServerKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlPrivateServerKeywordPage />;
}
