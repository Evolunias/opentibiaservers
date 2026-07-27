import AlasteraRealMapServerGermanyKeywordPage, { generateMetadata } from './alastera-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerGermanyKeywordPage />;
}
