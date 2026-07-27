import TopMarolaotOtKeywordPage, { generateMetadata } from './top-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotOtKeywordPage />;
}
