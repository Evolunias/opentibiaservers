import Tibiame15PvpeServerKeywordPage, { generateMetadata } from './tibiame-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15PvpeServerKeywordPage />;
}
