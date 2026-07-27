import AureraGlobalBrazilServersKeywordPage, { generateMetadata } from './aurera-global-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalBrazilServersKeywordPage />;
}
