import EvoluniaBrazilServerKeywordPage, { generateMetadata } from './evolunia-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaBrazilServerKeywordPage />;
}
