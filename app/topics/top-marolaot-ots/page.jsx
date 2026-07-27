import TopMarolaotOtsKeywordPage, { generateMetadata } from './top-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotOtsKeywordPage />;
}
