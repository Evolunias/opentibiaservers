import Tibia12RealMapRegisterKeywordPage, { generateMetadata } from './tibia-12-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapRegisterKeywordPage />;
}
