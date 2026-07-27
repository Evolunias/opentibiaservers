import RealMapServerListNorthAmericaKeywordPage, { generateMetadata } from './real-map-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListNorthAmericaKeywordPage />;
}
