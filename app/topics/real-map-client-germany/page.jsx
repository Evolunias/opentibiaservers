import RealMapClientGermanyKeywordPage, { generateMetadata } from './real-map-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientGermanyKeywordPage />;
}
