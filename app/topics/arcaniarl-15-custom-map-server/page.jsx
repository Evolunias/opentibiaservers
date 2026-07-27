import Arcaniarl15CustomMapServerKeywordPage, { generateMetadata } from './arcaniarl-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15CustomMapServerKeywordPage />;
}
