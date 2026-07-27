import ActiveMarolaotServerKeywordPage, { generateMetadata } from './active-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotServerKeywordPage />;
}
