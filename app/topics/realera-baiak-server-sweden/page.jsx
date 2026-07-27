import RealeraBaiakServerSwedenKeywordPage, { generateMetadata } from './realera-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraBaiakServerSwedenKeywordPage />;
}
