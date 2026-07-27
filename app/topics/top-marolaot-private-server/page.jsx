import TopMarolaotPrivateServerKeywordPage, { generateMetadata } from './top-marolaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotPrivateServerKeywordPage />;
}
