import AlasteraBrazilServerKeywordPage, { generateMetadata } from './alastera-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraBrazilServerKeywordPage />;
}
