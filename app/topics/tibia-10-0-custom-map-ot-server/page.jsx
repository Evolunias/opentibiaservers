import Tibia100CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapOtServerKeywordPage />;
}
