import Tibia84CustomMapServerKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapServerKeywordPage />;
}
