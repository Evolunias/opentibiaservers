import Midhem80PvpServerKeywordPage, { generateMetadata } from './midhem-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80PvpServerKeywordPage />;
}
