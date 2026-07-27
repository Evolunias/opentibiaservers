import MarolaotCanadaServerKeywordPage, { generateMetadata } from './marolaot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotCanadaServerKeywordPage />;
}
