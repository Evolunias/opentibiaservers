import Tibia80PvpeRegisterKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeRegisterKeywordPage />;
}
