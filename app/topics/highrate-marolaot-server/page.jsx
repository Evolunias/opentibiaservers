import HighrateMarolaotServerKeywordPage, { generateMetadata } from './highrate-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotServerKeywordPage />;
}
