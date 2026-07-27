import Shadowcores81CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores81CustomMapServerKeywordPage />;
}
