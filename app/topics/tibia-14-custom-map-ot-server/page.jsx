import Tibia14CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-14-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapOtServerKeywordPage />;
}
