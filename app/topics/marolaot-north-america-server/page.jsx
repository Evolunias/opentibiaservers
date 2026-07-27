import MarolaotNorthAmericaServerKeywordPage, { generateMetadata } from './marolaot-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotNorthAmericaServerKeywordPage />;
}
