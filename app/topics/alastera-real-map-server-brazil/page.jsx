import AlasteraRealMapServerBrazilKeywordPage, { generateMetadata } from './alastera-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerBrazilKeywordPage />;
}
