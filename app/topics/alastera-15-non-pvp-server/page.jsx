import Alastera15NonPvpServerKeywordPage, { generateMetadata } from './alastera-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15NonPvpServerKeywordPage />;
}
