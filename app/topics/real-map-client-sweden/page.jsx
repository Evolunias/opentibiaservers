import RealMapClientSwedenKeywordPage, { generateMetadata } from './real-map-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientSwedenKeywordPage />;
}
