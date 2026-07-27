import TibiaraLatinAmericaServersKeywordPage, { generateMetadata } from './tibiara-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraLatinAmericaServersKeywordPage />;
}
