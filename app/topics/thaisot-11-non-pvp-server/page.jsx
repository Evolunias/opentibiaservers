import Thaisot11NonPvpServerKeywordPage, { generateMetadata } from './thaisot-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11NonPvpServerKeywordPage />;
}
