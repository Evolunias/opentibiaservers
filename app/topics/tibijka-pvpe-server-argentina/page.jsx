import TibijkaPvpeServerArgentinaKeywordPage, { generateMetadata } from './tibijka-pvpe-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeServerArgentinaKeywordPage />;
}
