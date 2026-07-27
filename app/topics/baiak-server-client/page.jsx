import BaiakServerClientKeywordPage, { generateMetadata } from './baiak-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerClientKeywordPage />;
}
