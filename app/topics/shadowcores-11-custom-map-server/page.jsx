import Shadowcores11CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11CustomMapServerKeywordPage />;
}
