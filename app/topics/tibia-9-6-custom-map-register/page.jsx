import Tibia96CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapRegisterKeywordPage />;
}
