import Miracle81CustomMapServerKeywordPage, { generateMetadata } from './miracle-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle81CustomMapServerKeywordPage />;
}
