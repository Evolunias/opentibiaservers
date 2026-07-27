import PopularArcaniarlServerKeywordPage, { generateMetadata } from './popular-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlServerKeywordPage />;
}
