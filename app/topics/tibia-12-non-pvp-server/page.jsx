import Tibia12NonPvpServerKeywordPage, { generateMetadata } from './tibia-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpServerKeywordPage />;
}
