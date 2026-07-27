import EvoluniaLatinAmericaServersKeywordPage, { generateMetadata } from './evolunia-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaLatinAmericaServersKeywordPage />;
}
