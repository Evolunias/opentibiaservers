import AlasteraEuropeServerKeywordPage, { generateMetadata } from './alastera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEuropeServerKeywordPage />;
}
