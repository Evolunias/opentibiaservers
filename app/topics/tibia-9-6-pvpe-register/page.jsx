import Tibia96PvpeRegisterKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeRegisterKeywordPage />;
}
