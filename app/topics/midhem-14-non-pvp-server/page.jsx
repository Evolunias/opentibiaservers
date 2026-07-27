import Midhem14NonPvpServerKeywordPage, { generateMetadata } from './midhem-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14NonPvpServerKeywordPage />;
}
