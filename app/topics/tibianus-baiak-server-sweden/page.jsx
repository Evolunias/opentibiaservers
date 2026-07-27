import TibianusBaiakServerSwedenKeywordPage, { generateMetadata } from './tibianus-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBaiakServerSwedenKeywordPage />;
}
