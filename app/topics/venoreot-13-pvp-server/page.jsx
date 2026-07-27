import Venoreot13PvpServerKeywordPage, { generateMetadata } from './venoreot-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13PvpServerKeywordPage />;
}
