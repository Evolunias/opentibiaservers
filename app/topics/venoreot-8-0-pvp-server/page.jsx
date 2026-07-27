import Venoreot80PvpServerKeywordPage, { generateMetadata } from './venoreot-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot80PvpServerKeywordPage />;
}
