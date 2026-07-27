import ActiveMarolaotOtsKeywordPage, { generateMetadata } from './active-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotOtsKeywordPage />;
}
