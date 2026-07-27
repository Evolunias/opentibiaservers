import Tibia15RealMapRegisterKeywordPage, { generateMetadata } from './tibia-15-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapRegisterKeywordPage />;
}
