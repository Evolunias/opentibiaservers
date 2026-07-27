import Tibia13PvpeRegisterKeywordPage, { generateMetadata } from './tibia-13-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeRegisterKeywordPage />;
}
