import Arcaniarl14RealMapServerKeywordPage, { generateMetadata } from './arcaniarl-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl14RealMapServerKeywordPage />;
}
