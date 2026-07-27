import AlasteraArgentinaServersKeywordPage, { generateMetadata } from './alastera-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraArgentinaServersKeywordPage />;
}
