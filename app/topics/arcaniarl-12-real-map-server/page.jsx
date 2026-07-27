import Arcaniarl12RealMapServerKeywordPage, { generateMetadata } from './arcaniarl-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl12RealMapServerKeywordPage />;
}
