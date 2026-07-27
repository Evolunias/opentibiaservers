import ImperianicBrazilServersKeywordPage, { generateMetadata } from './imperianic-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicBrazilServersKeywordPage />;
}
