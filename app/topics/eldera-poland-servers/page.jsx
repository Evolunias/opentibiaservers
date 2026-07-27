import ElderaPolandServersKeywordPage, { generateMetadata } from './eldera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPolandServersKeywordPage />;
}
