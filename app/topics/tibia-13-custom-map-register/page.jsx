import Tibia13CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-13-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapRegisterKeywordPage />;
}
