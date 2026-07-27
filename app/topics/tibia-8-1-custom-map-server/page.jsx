import Tibia81CustomMapServerKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapServerKeywordPage />;
}
