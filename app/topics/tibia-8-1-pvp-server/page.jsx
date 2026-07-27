import Tibia81PvpServerKeywordPage, { generateMetadata } from './tibia-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpServerKeywordPage />;
}
