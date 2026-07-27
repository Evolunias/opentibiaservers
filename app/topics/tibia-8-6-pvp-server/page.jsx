import Tibia86PvpServerKeywordPage, { generateMetadata } from './tibia-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpServerKeywordPage />;
}
