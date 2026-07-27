import Midhem14PvpServerKeywordPage, { generateMetadata } from './midhem-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14PvpServerKeywordPage />;
}
