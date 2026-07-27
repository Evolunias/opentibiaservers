import CanobLatinAmericaServersKeywordPage, { generateMetadata } from './canob-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobLatinAmericaServersKeywordPage />;
}
