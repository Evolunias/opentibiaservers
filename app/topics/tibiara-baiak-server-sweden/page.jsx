import TibiaraBaiakServerSwedenKeywordPage, { generateMetadata } from './tibiara-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraBaiakServerSwedenKeywordPage />;
}
