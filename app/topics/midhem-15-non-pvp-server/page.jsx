import Midhem15NonPvpServerKeywordPage, { generateMetadata } from './midhem-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15NonPvpServerKeywordPage />;
}
