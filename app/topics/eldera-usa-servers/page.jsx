import ElderaUsaServersKeywordPage, { generateMetadata } from './eldera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaUsaServersKeywordPage />;
}
