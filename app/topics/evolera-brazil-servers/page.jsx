import EvoleraBrazilServersKeywordPage, { generateMetadata } from './evolera-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraBrazilServersKeywordPage />;
}
