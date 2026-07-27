import LowrateMarolaotServerKeywordPage, { generateMetadata } from './lowrate-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotServerKeywordPage />;
}
