import Tibia11PvpServerKeywordPage, { generateMetadata } from './tibia-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpServerKeywordPage />;
}
