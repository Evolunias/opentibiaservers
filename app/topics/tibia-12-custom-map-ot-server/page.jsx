import Tibia12CustomMapOtServerKeywordPage, { generateMetadata } from './tibia-12-custom-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapOtServerKeywordPage />;
}
