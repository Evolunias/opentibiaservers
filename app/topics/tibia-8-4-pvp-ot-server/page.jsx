import Tibia84PvpOtServerKeywordPage, { generateMetadata } from './tibia-8-4-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpOtServerKeywordPage />;
}
