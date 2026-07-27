import Tibia84NonPvpServerKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpServerKeywordPage />;
}
