import RealMapClientCanadaKeywordPage, { generateMetadata } from './real-map-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientCanadaKeywordPage />;
}
