import Thornia74CustomMapServerKeywordPage, { generateMetadata } from './thornia-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74CustomMapServerKeywordPage />;
}
