import Thaisot12PvpServerKeywordPage, { generateMetadata } from './thaisot-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12PvpServerKeywordPage />;
}
