import Tibia86CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapRegisterKeywordPage />;
}
