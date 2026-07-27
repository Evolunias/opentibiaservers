import TopArcaniarlServerKeywordPage, { generateMetadata } from './top-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlServerKeywordPage />;
}
