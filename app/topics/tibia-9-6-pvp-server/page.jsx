import Tibia96PvpServerKeywordPage, { generateMetadata } from './tibia-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpServerKeywordPage />;
}
