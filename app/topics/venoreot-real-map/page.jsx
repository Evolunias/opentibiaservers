import VenoreotRealMapKeywordPage, { generateMetadata } from './venoreot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRealMapKeywordPage />;
}
