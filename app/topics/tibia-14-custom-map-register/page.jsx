import Tibia14CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-14-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapRegisterKeywordPage />;
}
