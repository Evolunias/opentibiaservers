import Tibia86CustomMapServerKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapServerKeywordPage />;
}
