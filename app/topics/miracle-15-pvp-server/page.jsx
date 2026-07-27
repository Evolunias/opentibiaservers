import Miracle15PvpServerKeywordPage, { generateMetadata } from './miracle-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15PvpServerKeywordPage />;
}
