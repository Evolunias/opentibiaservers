import Tibia11NonPvpServerKeywordPage, { generateMetadata } from './tibia-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpServerKeywordPage />;
}
