import DuraOnlineBaiakServerSwedenKeywordPage, { generateMetadata } from './dura-online-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineBaiakServerSwedenKeywordPage />;
}
