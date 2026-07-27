import Eldera15PvpeServerKeywordPage, { generateMetadata } from './eldera-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15PvpeServerKeywordPage />;
}
