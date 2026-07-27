import Tibia11RealMapRegisterKeywordPage, { generateMetadata } from './tibia-11-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapRegisterKeywordPage />;
}
