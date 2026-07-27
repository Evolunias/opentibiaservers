import Thaisot11PvpServerKeywordPage, { generateMetadata } from './thaisot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11PvpServerKeywordPage />;
}
