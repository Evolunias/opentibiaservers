import Tibia80RealMapRegisterKeywordPage, { generateMetadata } from './tibia-8-0-real-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapRegisterKeywordPage />;
}
