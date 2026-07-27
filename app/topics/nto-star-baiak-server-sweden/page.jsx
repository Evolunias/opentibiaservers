import NtoStarBaiakServerSwedenKeywordPage, { generateMetadata } from './nto-star-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBaiakServerSwedenKeywordPage />;
}
