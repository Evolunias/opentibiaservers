import PopularMarolaotLoginKeywordPage, { generateMetadata } from './popular-marolaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotLoginKeywordPage />;
}
