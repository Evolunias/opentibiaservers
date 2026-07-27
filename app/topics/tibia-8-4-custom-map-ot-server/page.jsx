import Tibia84CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapOtServerKeywordPage />;
}
