import Tibia15NonPvpServerKeywordPage, { generateMetadata } from './tibia-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpServerKeywordPage />;
}
