import PvpMarolaotServerKeywordPage, { generateMetadata } from './pvp-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpMarolaotServerKeywordPage />;
}
