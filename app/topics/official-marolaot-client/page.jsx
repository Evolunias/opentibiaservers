import OfficialMarolaotClientKeywordPage, { generateMetadata } from './official-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotClientKeywordPage />;
}
