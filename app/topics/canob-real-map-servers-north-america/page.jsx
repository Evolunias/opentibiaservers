import CanobRealMapServersNorthAmericaKeywordPage, { generateMetadata } from './canob-real-map-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRealMapServersNorthAmericaKeywordPage />;
}
