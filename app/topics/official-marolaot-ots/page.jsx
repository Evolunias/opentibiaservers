import OfficialMarolaotOtsKeywordPage, { generateMetadata } from './official-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotOtsKeywordPage />;
}
