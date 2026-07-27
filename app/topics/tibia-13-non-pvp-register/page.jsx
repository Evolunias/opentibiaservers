import Tibia13NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-13-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpRegisterKeywordPage />;
}
