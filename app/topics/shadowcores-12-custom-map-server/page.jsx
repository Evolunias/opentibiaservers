import Shadowcores12CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12CustomMapServerKeywordPage />;
}
