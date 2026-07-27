import Thornia71CustomMapServerKeywordPage, { generateMetadata } from './thornia-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71CustomMapServerKeywordPage />;
}
