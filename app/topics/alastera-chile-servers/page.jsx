import AlasteraChileServersKeywordPage, { generateMetadata } from './alastera-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraChileServersKeywordPage />;
}
