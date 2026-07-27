import ThorniaBrazilServersKeywordPage, { generateMetadata } from './thornia-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaBrazilServersKeywordPage />;
}
