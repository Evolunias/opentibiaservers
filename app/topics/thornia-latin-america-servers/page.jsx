import ThorniaLatinAmericaServersKeywordPage, { generateMetadata } from './thornia-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaLatinAmericaServersKeywordPage />;
}
