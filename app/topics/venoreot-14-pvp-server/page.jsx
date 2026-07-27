import Venoreot14PvpServerKeywordPage, { generateMetadata } from './venoreot-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14PvpServerKeywordPage />;
}
