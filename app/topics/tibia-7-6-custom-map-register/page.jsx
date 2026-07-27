import Tibia76CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapRegisterKeywordPage />;
}
