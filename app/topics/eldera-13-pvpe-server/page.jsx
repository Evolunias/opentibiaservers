import Eldera13PvpeServerKeywordPage, { generateMetadata } from './eldera-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13PvpeServerKeywordPage />;
}
