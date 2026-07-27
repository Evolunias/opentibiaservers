import Midhem13PvpServerKeywordPage, { generateMetadata } from './midhem-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13PvpServerKeywordPage />;
}
