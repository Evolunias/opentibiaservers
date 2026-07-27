import Tibia1098NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpRegisterKeywordPage />;
}
