import ArcaniarlGermanyServerKeywordPage, { generateMetadata } from './arcaniarl-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlGermanyServerKeywordPage />;
}
