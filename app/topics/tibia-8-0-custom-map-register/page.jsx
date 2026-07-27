import Tibia80CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-8-0-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80CustomMapRegisterKeywordPage />;
}
