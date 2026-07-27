import Alastera96PvpServerKeywordPage, { generateMetadata } from './alastera-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96PvpServerKeywordPage />;
}
