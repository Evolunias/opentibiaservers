import HighrateMarolaotClientKeywordPage, { generateMetadata } from './highrate-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotClientKeywordPage />;
}
