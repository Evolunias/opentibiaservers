import AlasteraRealMapServersUkKeywordPage, { generateMetadata } from './alastera-real-map-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServersUkKeywordPage />;
}
