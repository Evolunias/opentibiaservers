import Tibia100CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapRegisterKeywordPage />;
}
