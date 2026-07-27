import Midhem13NonPvpServerKeywordPage, { generateMetadata } from './midhem-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13NonPvpServerKeywordPage />;
}
