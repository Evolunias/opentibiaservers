import Thornia1098CustomMapServerKeywordPage, { generateMetadata } from './thornia-10-98-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia1098CustomMapServerKeywordPage />;
}
