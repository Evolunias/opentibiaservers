import LowrateMarolaotClientKeywordPage, { generateMetadata } from './lowrate-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotClientKeywordPage />;
}
