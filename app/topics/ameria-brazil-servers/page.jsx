import AmeriaBrazilServersKeywordPage, { generateMetadata } from './ameria-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBrazilServersKeywordPage />;
}
