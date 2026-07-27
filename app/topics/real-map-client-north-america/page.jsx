import RealMapClientNorthAmericaKeywordPage, { generateMetadata } from './real-map-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClientNorthAmericaKeywordPage />;
}
