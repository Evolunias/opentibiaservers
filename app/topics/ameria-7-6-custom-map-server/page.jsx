import Ameria76CustomMapServerKeywordPage, { generateMetadata } from './ameria-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria76CustomMapServerKeywordPage />;
}
