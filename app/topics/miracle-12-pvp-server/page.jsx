import Miracle12PvpServerKeywordPage, { generateMetadata } from './miracle-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12PvpServerKeywordPage />;
}
