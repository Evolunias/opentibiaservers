import Midhem11PvpServerKeywordPage, { generateMetadata } from './midhem-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11PvpServerKeywordPage />;
}
