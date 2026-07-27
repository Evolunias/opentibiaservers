import AlasteraEuropeServersKeywordPage, { generateMetadata } from './alastera-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEuropeServersKeywordPage />;
}
