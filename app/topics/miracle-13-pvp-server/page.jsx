import Miracle13PvpServerKeywordPage, { generateMetadata } from './miracle-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13PvpServerKeywordPage />;
}
