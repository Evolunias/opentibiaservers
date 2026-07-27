import Alastera84PvpServerKeywordPage, { generateMetadata } from './alastera-8-4-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84PvpServerKeywordPage />;
}
