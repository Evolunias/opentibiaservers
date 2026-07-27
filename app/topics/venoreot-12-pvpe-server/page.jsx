import Venoreot12PvpeServerKeywordPage, { generateMetadata } from './venoreot-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12PvpeServerKeywordPage />;
}
