import Venoreot12PvpServerKeywordPage, { generateMetadata } from './venoreot-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12PvpServerKeywordPage />;
}
