import RealestaBaiakServerSwedenKeywordPage, { generateMetadata } from './realesta-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaBaiakServerSwedenKeywordPage />;
}
