import Tibia71CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapRegisterKeywordPage />;
}
