import Eldera11NonPvpServerKeywordPage, { generateMetadata } from './eldera-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11NonPvpServerKeywordPage />;
}
