import Tibia84PvpeRegisterKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeRegisterKeywordPage />;
}
