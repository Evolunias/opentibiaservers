import Arcaniarl11RealMapServerKeywordPage, { generateMetadata } from './arcaniarl-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11RealMapServerKeywordPage />;
}
