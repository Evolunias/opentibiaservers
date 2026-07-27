import Thornia11CustomMapServerKeywordPage, { generateMetadata } from './thornia-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11CustomMapServerKeywordPage />;
}
