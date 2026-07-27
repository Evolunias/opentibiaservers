import Tibia84RealMapRegisterKeywordPage, { generateMetadata } from './tibia-8-4-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapRegisterKeywordPage />;
}
