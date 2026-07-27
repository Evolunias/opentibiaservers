import Venoreot11PvpServerKeywordPage, { generateMetadata } from './venoreot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11PvpServerKeywordPage />;
}
