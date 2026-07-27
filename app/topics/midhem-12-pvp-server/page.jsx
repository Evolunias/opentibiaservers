import Midhem12PvpServerKeywordPage, { generateMetadata } from './midhem-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12PvpServerKeywordPage />;
}
