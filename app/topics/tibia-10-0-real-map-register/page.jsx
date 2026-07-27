import Tibia100RealMapRegisterKeywordPage, { generateMetadata } from './tibia-10-0-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapRegisterKeywordPage />;
}
