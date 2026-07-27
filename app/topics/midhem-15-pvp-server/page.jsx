import Midhem15PvpServerKeywordPage, { generateMetadata } from './midhem-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15PvpServerKeywordPage />;
}
