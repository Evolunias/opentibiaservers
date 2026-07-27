import TibijkaBrazilServerKeywordPage, { generateMetadata } from './tibijka-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBrazilServerKeywordPage />;
}
