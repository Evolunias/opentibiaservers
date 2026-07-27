import ElderaChileServersKeywordPage, { generateMetadata } from './eldera-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaChileServersKeywordPage />;
}
