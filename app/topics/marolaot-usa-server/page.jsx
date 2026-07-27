import MarolaotUsaServerKeywordPage, { generateMetadata } from './marolaot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotUsaServerKeywordPage />;
}
