import RealestaRealMapServersNorthAmericaKeywordPage, { generateMetadata } from './realesta-real-map-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServersNorthAmericaKeywordPage />;
}
