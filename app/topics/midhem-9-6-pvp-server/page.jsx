import Midhem96PvpServerKeywordPage, { generateMetadata } from './midhem-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96PvpServerKeywordPage />;
}
