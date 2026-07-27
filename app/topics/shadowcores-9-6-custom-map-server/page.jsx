import Shadowcores96CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96CustomMapServerKeywordPage />;
}
