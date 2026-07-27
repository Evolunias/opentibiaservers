import Tibia13CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-13-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapOtServerKeywordPage />;
}
