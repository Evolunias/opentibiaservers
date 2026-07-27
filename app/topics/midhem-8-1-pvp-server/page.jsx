import Midhem81PvpServerKeywordPage, { generateMetadata } from './midhem-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81PvpServerKeywordPage />;
}
