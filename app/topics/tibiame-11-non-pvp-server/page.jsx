import Tibiame11NonPvpServerKeywordPage, { generateMetadata } from './tibiame-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11NonPvpServerKeywordPage />;
}
