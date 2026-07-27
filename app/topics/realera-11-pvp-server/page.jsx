import Realera11PvpServerKeywordPage, { generateMetadata } from './realera-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11PvpServerKeywordPage />;
}
