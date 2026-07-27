import BestMarolaotOtsKeywordPage, { generateMetadata } from './best-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotOtsKeywordPage />;
}
