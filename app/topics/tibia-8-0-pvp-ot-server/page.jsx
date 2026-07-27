import Tibia80PvpOtServerKeywordPage, { generateMetadata } from './tibia-8-0-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpOtServerKeywordPage />;
}
