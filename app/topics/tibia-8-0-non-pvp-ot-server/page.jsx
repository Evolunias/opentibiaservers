import Tibia80NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpOtServerKeywordPage />;
}
