import OfficialMarolaotServerKeywordPage, { generateMetadata } from './official-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotServerKeywordPage />;
}
