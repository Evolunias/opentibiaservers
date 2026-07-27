import NepreniaPvpeServerArgentinaKeywordPage, { generateMetadata } from './neprenia-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerArgentinaKeywordPage />;
}
