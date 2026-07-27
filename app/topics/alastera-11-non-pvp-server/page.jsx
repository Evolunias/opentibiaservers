import Alastera11NonPvpServerKeywordPage, { generateMetadata } from './alastera-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11NonPvpServerKeywordPage />;
}
