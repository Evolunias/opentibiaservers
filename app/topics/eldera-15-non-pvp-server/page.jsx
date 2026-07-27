import Eldera15NonPvpServerKeywordPage, { generateMetadata } from './eldera-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15NonPvpServerKeywordPage />;
}
