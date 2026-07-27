import Venoreot15PvpServerKeywordPage, { generateMetadata } from './venoreot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15PvpServerKeywordPage />;
}
