import Tibia71PvpeRegisterKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeRegisterKeywordPage />;
}
