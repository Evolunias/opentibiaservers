import MiracleArgentinaServersKeywordPage, { generateMetadata } from './miracle-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleArgentinaServersKeywordPage />;
}
