import Thaisot14NonPvpServerKeywordPage, { generateMetadata } from './thaisot-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14NonPvpServerKeywordPage />;
}
