import Alastera15PvpServerKeywordPage, { generateMetadata } from './alastera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15PvpServerKeywordPage />;
}
