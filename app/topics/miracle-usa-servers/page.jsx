import MiracleUsaServersKeywordPage, { generateMetadata } from './miracle-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleUsaServersKeywordPage />;
}
