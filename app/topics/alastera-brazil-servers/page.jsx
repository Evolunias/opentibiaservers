import AlasteraBrazilServersKeywordPage, { generateMetadata } from './alastera-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraBrazilServersKeywordPage />;
}
