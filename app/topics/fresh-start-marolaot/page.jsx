import FreshStartMarolaotKeywordPage, { generateMetadata } from './fresh-start-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMarolaotKeywordPage />;
}
