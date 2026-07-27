import NewMarolaotKeywordPage, { generateMetadata } from './new-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotKeywordPage />;
}
