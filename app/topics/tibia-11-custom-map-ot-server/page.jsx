import Tibia11CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-11-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapOtServerKeywordPage />;
}
