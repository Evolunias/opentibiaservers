import CyntaraBrazilServerKeywordPage, { generateMetadata } from './cyntara-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBrazilServerKeywordPage />;
}
