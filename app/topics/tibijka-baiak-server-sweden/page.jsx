import TibijkaBaiakServerSwedenKeywordPage, { generateMetadata } from './tibijka-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBaiakServerSwedenKeywordPage />;
}
