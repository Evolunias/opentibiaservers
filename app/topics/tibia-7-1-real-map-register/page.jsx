import Tibia71RealMapRegisterKeywordPage, { generateMetadata } from './tibia-7-1-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapRegisterKeywordPage />;
}
