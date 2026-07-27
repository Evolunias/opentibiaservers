import CustomMarolaotOtKeywordPage, { generateMetadata } from './custom-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotOtKeywordPage />;
}
