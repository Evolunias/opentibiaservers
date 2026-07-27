import NonPvpMarolaotServerKeywordPage, { generateMetadata } from './non-pvp-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpMarolaotServerKeywordPage />;
}
