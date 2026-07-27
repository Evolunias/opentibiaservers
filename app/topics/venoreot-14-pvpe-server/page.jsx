import Venoreot14PvpeServerKeywordPage, { generateMetadata } from './venoreot-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14PvpeServerKeywordPage />;
}
