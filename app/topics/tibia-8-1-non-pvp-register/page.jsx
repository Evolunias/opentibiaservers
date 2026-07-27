import Tibia81NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpRegisterKeywordPage />;
}
