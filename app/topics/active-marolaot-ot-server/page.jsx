import ActiveMarolaotOtServerKeywordPage, { generateMetadata } from './active-marolaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotOtServerKeywordPage />;
}
