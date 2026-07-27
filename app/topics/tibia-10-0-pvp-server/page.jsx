import Tibia100PvpServerKeywordPage, { generateMetadata } from './tibia-10-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpServerKeywordPage />;
}
