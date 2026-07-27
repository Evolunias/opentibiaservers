import AmeriaLatinAmericaServersKeywordPage, { generateMetadata } from './ameria-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaLatinAmericaServersKeywordPage />;
}
