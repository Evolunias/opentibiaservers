import Tibia86RealMapRegisterKeywordPage, { generateMetadata } from './tibia-8-6-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapRegisterKeywordPage />;
}
