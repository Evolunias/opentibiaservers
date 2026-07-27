import CyntaraBrazilServersKeywordPage, { generateMetadata } from './cyntara-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBrazilServersKeywordPage />;
}
