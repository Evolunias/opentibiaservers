import BlazeraPvpeServerArgentinaKeywordPage, { generateMetadata } from './blazera-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpeServerArgentinaKeywordPage />;
}
