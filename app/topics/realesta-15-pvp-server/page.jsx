import Realesta15PvpServerKeywordPage, { generateMetadata } from './realesta-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15PvpServerKeywordPage />;
}
