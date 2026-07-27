import Shadowcores15CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15CustomMapServerKeywordPage />;
}
