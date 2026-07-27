import Thornia76CustomMapServerKeywordPage, { generateMetadata } from './thornia-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia76CustomMapServerKeywordPage />;
}
