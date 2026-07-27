import Venoreot15NonPvpServerKeywordPage, { generateMetadata } from './venoreot-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15NonPvpServerKeywordPage />;
}
