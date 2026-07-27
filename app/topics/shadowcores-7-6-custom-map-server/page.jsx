import Shadowcores76CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores76CustomMapServerKeywordPage />;
}
