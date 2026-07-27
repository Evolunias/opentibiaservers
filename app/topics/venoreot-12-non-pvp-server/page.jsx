import Venoreot12NonPvpServerKeywordPage, { generateMetadata } from './venoreot-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12NonPvpServerKeywordPage />;
}
