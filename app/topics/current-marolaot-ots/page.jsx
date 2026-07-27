import CurrentMarolaotOtsKeywordPage, { generateMetadata } from './current-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotOtsKeywordPage />;
}
