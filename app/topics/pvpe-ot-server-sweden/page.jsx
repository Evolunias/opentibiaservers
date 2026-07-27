import PvpeOtServerSwedenKeywordPage, { generateMetadata } from './pvpe-ot-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerSwedenKeywordPage />;
}
