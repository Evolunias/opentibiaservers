import Thaisot14PvpServerKeywordPage, { generateMetadata } from './thaisot-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14PvpServerKeywordPage />;
}
