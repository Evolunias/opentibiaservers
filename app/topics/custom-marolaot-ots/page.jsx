import CustomMarolaotOtsKeywordPage, { generateMetadata } from './custom-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotOtsKeywordPage />;
}
