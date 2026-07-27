import PopularMarolaotOfficialKeywordPage, { generateMetadata } from './popular-marolaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotOfficialKeywordPage />;
}
