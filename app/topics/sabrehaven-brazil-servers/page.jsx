import SabrehavenBrazilServersKeywordPage, { generateMetadata } from './sabrehaven-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenBrazilServersKeywordPage />;
}
