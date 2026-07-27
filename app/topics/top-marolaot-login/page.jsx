import TopMarolaotLoginKeywordPage, { generateMetadata } from './top-marolaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotLoginKeywordPage />;
}
