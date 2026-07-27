import CurrentMarolaotServerKeywordPage, { generateMetadata } from './current-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotServerKeywordPage />;
}
