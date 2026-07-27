import TopMarolaotOtServerKeywordPage, { generateMetadata } from './top-marolaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotOtServerKeywordPage />;
}
