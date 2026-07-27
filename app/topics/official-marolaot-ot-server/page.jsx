import OfficialMarolaotOtServerKeywordPage, { generateMetadata } from './official-marolaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotOtServerKeywordPage />;
}
