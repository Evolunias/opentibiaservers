import EvoleraBrazilServerKeywordPage, { generateMetadata } from './evolera-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraBrazilServerKeywordPage />;
}
