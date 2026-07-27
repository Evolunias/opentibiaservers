import Venoreot13PvpeServerKeywordPage, { generateMetadata } from './venoreot-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13PvpeServerKeywordPage />;
}
