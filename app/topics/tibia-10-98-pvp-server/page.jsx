import Tibia1098PvpServerKeywordPage, { generateMetadata } from './tibia-10-98-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpServerKeywordPage />;
}
