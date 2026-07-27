import PopularMarolaotKeywordPage, { generateMetadata } from './popular-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotKeywordPage />;
}
