import Alastera14NonPvpServerKeywordPage, { generateMetadata } from './alastera-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14NonPvpServerKeywordPage />;
}
