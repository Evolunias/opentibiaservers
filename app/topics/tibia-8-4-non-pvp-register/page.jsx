import Tibia84NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpRegisterKeywordPage />;
}
