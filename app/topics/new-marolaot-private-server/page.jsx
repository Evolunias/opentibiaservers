import NewMarolaotPrivateServerKeywordPage, { generateMetadata } from './new-marolaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotPrivateServerKeywordPage />;
}
