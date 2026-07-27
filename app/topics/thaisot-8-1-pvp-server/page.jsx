import Thaisot81PvpServerKeywordPage, { generateMetadata } from './thaisot-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81PvpServerKeywordPage />;
}
