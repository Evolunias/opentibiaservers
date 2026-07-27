import Tibia74PvpOtServerKeywordPage, { generateMetadata } from './tibia-7-4-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpOtServerKeywordPage />;
}
