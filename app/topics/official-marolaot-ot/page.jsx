import OfficialMarolaotOtKeywordPage, { generateMetadata } from './official-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotOtKeywordPage />;
}
