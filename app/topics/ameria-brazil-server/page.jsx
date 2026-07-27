import AmeriaBrazilServerKeywordPage, { generateMetadata } from './ameria-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBrazilServerKeywordPage />;
}
