import Midhem84NonPvpServerKeywordPage, { generateMetadata } from './midhem-8-4-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84NonPvpServerKeywordPage />;
}
