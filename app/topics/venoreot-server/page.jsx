import VenoreotServerKeywordPage, { generateMetadata } from './venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotServerKeywordPage />;
}
