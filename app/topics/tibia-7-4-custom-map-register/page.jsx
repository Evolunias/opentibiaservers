import Tibia74CustomMapRegisterKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapRegisterKeywordPage />;
}
