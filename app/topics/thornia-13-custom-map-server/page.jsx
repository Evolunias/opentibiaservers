import Thornia13CustomMapServerKeywordPage, { generateMetadata } from './thornia-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13CustomMapServerKeywordPage />;
}
