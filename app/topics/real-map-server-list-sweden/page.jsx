import RealMapServerListSwedenKeywordPage, { generateMetadata } from './real-map-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListSwedenKeywordPage />;
}
