import Venoreot15PvpeServerKeywordPage, { generateMetadata } from './venoreot-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15PvpeServerKeywordPage />;
}
