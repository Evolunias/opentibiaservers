import Miracle13PvpeServerKeywordPage, { generateMetadata } from './miracle-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13PvpeServerKeywordPage />;
}
