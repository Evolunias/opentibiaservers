import CurrentMarolaotKeywordPage, { generateMetadata } from './current-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotKeywordPage />;
}
