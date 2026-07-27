import ArcaniarlServerKeywordPage, { generateMetadata } from './arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlServerKeywordPage />;
}
