import VenoreotUsaServerKeywordPage, { generateMetadata } from './venoreot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotUsaServerKeywordPage />;
}
