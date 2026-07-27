import SabrehavenLatinAmericaServersKeywordPage, { generateMetadata } from './sabrehaven-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLatinAmericaServersKeywordPage />;
}
