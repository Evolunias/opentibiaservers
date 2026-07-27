import AlasteraPolandServersKeywordPage, { generateMetadata } from './alastera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPolandServersKeywordPage />;
}
