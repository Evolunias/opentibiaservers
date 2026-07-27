import Tibia71PvpServerKeywordPage, { generateMetadata } from './tibia-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpServerKeywordPage />;
}
