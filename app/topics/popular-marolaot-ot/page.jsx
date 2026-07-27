import PopularMarolaotOtKeywordPage, { generateMetadata } from './popular-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotOtKeywordPage />;
}
