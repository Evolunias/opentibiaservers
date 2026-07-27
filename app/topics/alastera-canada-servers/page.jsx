import AlasteraCanadaServersKeywordPage, { generateMetadata } from './alastera-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraCanadaServersKeywordPage />;
}
