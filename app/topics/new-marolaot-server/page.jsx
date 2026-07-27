import NewMarolaotServerKeywordPage, { generateMetadata } from './new-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotServerKeywordPage />;
}
