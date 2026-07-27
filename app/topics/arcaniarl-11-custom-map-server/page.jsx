import Arcaniarl11CustomMapServerKeywordPage, { generateMetadata } from './arcaniarl-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11CustomMapServerKeywordPage />;
}
