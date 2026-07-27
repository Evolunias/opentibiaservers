import VenoreotSouthAmericaServerKeywordPage, { generateMetadata } from './venoreot-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSouthAmericaServerKeywordPage />;
}
