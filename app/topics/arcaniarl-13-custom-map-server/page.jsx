import Arcaniarl13CustomMapServerKeywordPage, { generateMetadata } from './arcaniarl-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl13CustomMapServerKeywordPage />;
}
