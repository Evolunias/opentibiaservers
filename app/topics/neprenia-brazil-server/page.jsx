import NepreniaBrazilServerKeywordPage, { generateMetadata } from './neprenia-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaBrazilServerKeywordPage />;
}
