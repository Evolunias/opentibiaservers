import Tibia13PvpServerKeywordPage, { generateMetadata } from './tibia-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpServerKeywordPage />;
}
