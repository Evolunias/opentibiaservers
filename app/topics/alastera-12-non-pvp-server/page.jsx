import Alastera12NonPvpServerKeywordPage, { generateMetadata } from './alastera-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12NonPvpServerKeywordPage />;
}
