import Tibia15CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-15-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapRegisterKeywordPage />;
}
