import OlderaBrazilServersKeywordPage, { generateMetadata } from './oldera-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBrazilServersKeywordPage />;
}
