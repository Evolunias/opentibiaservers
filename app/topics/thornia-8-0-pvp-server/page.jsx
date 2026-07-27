import Thornia80PvpServerKeywordPage, { generateMetadata } from './thornia-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80PvpServerKeywordPage />;
}
