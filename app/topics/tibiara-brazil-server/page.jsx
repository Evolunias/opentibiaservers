import TibiaraBrazilServerKeywordPage, { generateMetadata } from './tibiara-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraBrazilServerKeywordPage />;
}
