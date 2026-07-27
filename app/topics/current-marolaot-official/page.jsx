import CurrentMarolaotOfficialKeywordPage, { generateMetadata } from './current-marolaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotOfficialKeywordPage />;
}
