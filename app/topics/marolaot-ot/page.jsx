import MarolaotOtKeywordPage, { generateMetadata } from './marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotOtKeywordPage />;
}
