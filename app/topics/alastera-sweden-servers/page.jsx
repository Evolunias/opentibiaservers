import AlasteraSwedenServersKeywordPage, { generateMetadata } from './alastera-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraSwedenServersKeywordPage />;
}
