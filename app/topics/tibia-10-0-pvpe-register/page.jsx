import Tibia100PvpeRegisterKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeRegisterKeywordPage />;
}
