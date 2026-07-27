import NostaltherRealMapServerSwedenKeywordPage, { generateMetadata } from './nostalther-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRealMapServerSwedenKeywordPage />;
}
