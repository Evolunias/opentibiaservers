import Venoreot14NonPvpServerKeywordPage, { generateMetadata } from './venoreot-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14NonPvpServerKeywordPage />;
}
