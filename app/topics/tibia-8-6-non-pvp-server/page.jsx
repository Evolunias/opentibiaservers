import Tibia86NonPvpServerKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpServerKeywordPage />;
}
