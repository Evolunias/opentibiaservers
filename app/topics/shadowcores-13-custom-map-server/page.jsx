import Shadowcores13CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13CustomMapServerKeywordPage />;
}
