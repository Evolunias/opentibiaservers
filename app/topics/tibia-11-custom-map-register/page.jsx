import Tibia11CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-11-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapRegisterKeywordPage />;
}
