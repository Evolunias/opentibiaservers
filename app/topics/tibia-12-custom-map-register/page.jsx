import Tibia12CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-12-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapRegisterKeywordPage />;
}
