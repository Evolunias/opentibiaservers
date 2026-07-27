import ElderaLatinAmericaServersKeywordPage, { generateMetadata } from './eldera-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaLatinAmericaServersKeywordPage />;
}
