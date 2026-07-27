import MiracleChileServersKeywordPage, { generateMetadata } from './miracle-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleChileServersKeywordPage />;
}
