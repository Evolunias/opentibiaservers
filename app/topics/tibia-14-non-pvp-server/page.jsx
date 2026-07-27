import Tibia14NonPvpServerKeywordPage, { generateMetadata } from './tibia-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpServerKeywordPage />;
}
