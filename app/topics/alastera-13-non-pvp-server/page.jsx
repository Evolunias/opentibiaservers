import Alastera13NonPvpServerKeywordPage, { generateMetadata } from './alastera-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13NonPvpServerKeywordPage />;
}
