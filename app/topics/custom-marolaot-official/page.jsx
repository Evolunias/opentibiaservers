import CustomMarolaotOfficialKeywordPage, { generateMetadata } from './custom-marolaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotOfficialKeywordPage />;
}
