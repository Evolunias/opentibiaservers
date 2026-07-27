import Tibia100NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpRegisterKeywordPage />;
}
