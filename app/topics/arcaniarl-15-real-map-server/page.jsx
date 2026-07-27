import Arcaniarl15RealMapServerKeywordPage, { generateMetadata } from './arcaniarl-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15RealMapServerKeywordPage />;
}
