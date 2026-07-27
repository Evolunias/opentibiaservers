import Thaisot80PvpServerKeywordPage, { generateMetadata } from './thaisot-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot80PvpServerKeywordPage />;
}
