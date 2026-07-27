import Thornia15CustomMapServerKeywordPage, { generateMetadata } from './thornia-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15CustomMapServerKeywordPage />;
}
