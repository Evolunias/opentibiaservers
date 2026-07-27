import RealMapServerListArgentinaKeywordPage, { generateMetadata } from './real-map-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListArgentinaKeywordPage />;
}
