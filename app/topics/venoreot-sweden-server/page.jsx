import VenoreotSwedenServerKeywordPage, { generateMetadata } from './venoreot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSwedenServerKeywordPage />;
}
