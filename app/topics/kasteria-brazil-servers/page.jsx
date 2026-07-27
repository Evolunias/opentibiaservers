import KasteriaBrazilServersKeywordPage, { generateMetadata } from './kasteria-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaBrazilServersKeywordPage />;
}
