import OlderaBrazilServerKeywordPage, { generateMetadata } from './oldera-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBrazilServerKeywordPage />;
}
