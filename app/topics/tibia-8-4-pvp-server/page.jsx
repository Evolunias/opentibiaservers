import Tibia84PvpServerKeywordPage, { generateMetadata } from './tibia-8-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpServerKeywordPage />;
}
