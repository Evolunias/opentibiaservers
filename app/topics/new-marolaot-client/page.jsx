import NewMarolaotClientKeywordPage, { generateMetadata } from './new-marolaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotClientKeywordPage />;
}
