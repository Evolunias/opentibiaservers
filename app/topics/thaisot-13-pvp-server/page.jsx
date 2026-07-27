import Thaisot13PvpServerKeywordPage, { generateMetadata } from './thaisot-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13PvpServerKeywordPage />;
}
