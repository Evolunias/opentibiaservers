import CurrentMarolaotOtKeywordPage, { generateMetadata } from './current-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotOtKeywordPage />;
}
