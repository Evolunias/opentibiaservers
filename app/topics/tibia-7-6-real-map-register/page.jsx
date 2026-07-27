import Tibia76RealMapRegisterKeywordPage, { generateMetadata } from './tibia-7-6-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapRegisterKeywordPage />;
}
