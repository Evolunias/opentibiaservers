import MarolaotServerKeywordPage, { generateMetadata } from './marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotServerKeywordPage />;
}
