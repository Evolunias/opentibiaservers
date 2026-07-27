import Tibia74NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpRegisterKeywordPage />;
}
