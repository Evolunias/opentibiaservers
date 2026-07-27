import Tibia96CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapOtServerKeywordPage />;
}
