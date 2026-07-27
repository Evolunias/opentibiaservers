import Shadowcores80CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores80CustomMapServerKeywordPage />;
}
