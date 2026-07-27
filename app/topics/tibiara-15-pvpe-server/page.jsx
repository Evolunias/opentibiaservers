import Tibiara15PvpeServerKeywordPage, { generateMetadata } from './tibiara-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15PvpeServerKeywordPage />;
}
