import Midhem12NonPvpServerKeywordPage, { generateMetadata } from './midhem-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12NonPvpServerKeywordPage />;
}
