import MediviaBrazilServersKeywordPage, { generateMetadata } from './medivia-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBrazilServersKeywordPage />;
}
