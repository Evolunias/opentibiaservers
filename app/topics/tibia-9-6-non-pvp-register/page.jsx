import Tibia96NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpRegisterKeywordPage />;
}
