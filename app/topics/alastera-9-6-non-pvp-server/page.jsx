import Alastera96NonPvpServerKeywordPage, { generateMetadata } from './alastera-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96NonPvpServerKeywordPage />;
}
