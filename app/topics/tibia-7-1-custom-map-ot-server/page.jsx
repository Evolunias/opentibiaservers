import Tibia71CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapOtServerKeywordPage />;
}
