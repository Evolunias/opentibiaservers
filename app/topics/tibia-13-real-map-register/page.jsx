import Tibia13RealMapRegisterKeywordPage, { generateMetadata } from './tibia-13-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapRegisterKeywordPage />;
}
