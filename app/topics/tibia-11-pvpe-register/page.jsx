import Tibia11PvpeRegisterKeywordPage, { generateMetadata } from './tibia-11-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeRegisterKeywordPage />;
}
