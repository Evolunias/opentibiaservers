import Miracle11PvpServerKeywordPage, { generateMetadata } from './miracle-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11PvpServerKeywordPage />;
}
