import NewMarolaotOtKeywordPage, { generateMetadata } from './new-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotOtKeywordPage />;
}
