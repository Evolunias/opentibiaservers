import Tibia96NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpOtServerKeywordPage />;
}
