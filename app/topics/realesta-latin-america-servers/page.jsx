import RealestaLatinAmericaServersKeywordPage, { generateMetadata } from './realesta-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaLatinAmericaServersKeywordPage />;
}
