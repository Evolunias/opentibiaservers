import OriginaltibiaBrazilServersKeywordPage, { generateMetadata } from './originaltibia-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaBrazilServersKeywordPage />;
}
