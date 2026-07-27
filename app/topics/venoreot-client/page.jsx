import VenoreotClientKeywordPage, { generateMetadata } from './venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotClientKeywordPage />;
}
