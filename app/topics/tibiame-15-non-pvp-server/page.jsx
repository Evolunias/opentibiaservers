import Tibiame15NonPvpServerKeywordPage, { generateMetadata } from './tibiame-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15NonPvpServerKeywordPage />;
}
