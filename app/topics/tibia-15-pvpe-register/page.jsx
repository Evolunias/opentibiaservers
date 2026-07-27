import Tibia15PvpeRegisterKeywordPage, { generateMetadata } from './tibia-15-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeRegisterKeywordPage />;
}
