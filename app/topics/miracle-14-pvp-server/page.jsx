import Miracle14PvpServerKeywordPage, { generateMetadata } from './miracle-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14PvpServerKeywordPage />;
}
