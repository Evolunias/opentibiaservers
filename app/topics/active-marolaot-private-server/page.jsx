import ActiveMarolaotPrivateServerKeywordPage, { generateMetadata } from './active-marolaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotPrivateServerKeywordPage />;
}
