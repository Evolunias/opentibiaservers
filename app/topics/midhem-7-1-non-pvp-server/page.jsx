import Midhem71NonPvpServerKeywordPage, { generateMetadata } from './midhem-7-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71NonPvpServerKeywordPage />;
}
