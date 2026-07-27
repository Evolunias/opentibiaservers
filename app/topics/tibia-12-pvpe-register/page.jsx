import Tibia12PvpeRegisterKeywordPage, { generateMetadata } from './tibia-12-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeRegisterKeywordPage />;
}
