import MiracleNorthAmericaServerKeywordPage, { generateMetadata } from './miracle-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleNorthAmericaServerKeywordPage />;
}
