import ElderaCanadaServersKeywordPage, { generateMetadata } from './eldera-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCanadaServersKeywordPage />;
}
