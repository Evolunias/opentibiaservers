import Oldera15PvpeServerKeywordPage, { generateMetadata } from './oldera-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15PvpeServerKeywordPage />;
}
