import Eldera96PvpServerKeywordPage, { generateMetadata } from './eldera-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96PvpServerKeywordPage />;
}
