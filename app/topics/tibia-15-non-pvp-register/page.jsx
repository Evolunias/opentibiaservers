import Tibia15NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-15-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpRegisterKeywordPage />;
}
