import Venoreot13NonPvpServerKeywordPage, { generateMetadata } from './venoreot-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13NonPvpServerKeywordPage />;
}
