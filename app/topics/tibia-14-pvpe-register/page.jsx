import Tibia14PvpeRegisterKeywordPage, { generateMetadata } from './tibia-14-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeRegisterKeywordPage />;
}
