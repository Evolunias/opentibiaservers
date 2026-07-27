import ActiveMarolaotOtKeywordPage, { generateMetadata } from './active-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotOtKeywordPage />;
}
