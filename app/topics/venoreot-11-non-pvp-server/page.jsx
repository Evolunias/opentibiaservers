import Venoreot11NonPvpServerKeywordPage, { generateMetadata } from './venoreot-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11NonPvpServerKeywordPage />;
}
