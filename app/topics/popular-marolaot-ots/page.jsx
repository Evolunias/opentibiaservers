import PopularMarolaotOtsKeywordPage, { generateMetadata } from './popular-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotOtsKeywordPage />;
}
