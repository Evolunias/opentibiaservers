import Shadowcores14CustomMapServerKeywordPage, { generateMetadata } from './shadowcores-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14CustomMapServerKeywordPage />;
}
