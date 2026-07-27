import Tibia14RealMapRegisterKeywordPage, { generateMetadata } from './tibia-14-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapRegisterKeywordPage />;
}
