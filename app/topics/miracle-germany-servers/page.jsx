import MiracleGermanyServersKeywordPage, { generateMetadata } from './miracle-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleGermanyServersKeywordPage />;
}
