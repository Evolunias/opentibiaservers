import Eldera80NonPvpServerKeywordPage, { generateMetadata } from './eldera-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80NonPvpServerKeywordPage />;
}
