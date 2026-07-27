import Tibia80CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapOtServerKeywordPage />;
}
