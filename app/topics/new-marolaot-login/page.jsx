import NewMarolaotLoginKeywordPage, { generateMetadata } from './new-marolaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotLoginKeywordPage />;
}
