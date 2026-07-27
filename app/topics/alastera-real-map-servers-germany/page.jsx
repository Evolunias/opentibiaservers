import AlasteraRealMapServersGermanyKeywordPage, { generateMetadata } from './alastera-real-map-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServersGermanyKeywordPage />;
}
