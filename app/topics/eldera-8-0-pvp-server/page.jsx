import Eldera80PvpServerKeywordPage, { generateMetadata } from './eldera-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80PvpServerKeywordPage />;
}
