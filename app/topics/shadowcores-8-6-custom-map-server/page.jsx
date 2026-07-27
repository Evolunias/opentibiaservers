import Shadowcores86CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores86CustomMapServerKeywordPage />;
}
