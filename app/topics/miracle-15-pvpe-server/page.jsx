import Miracle15PvpeServerKeywordPage, { generateMetadata } from './miracle-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15PvpeServerKeywordPage />;
}
