import CustomMarolaotKeywordPage, { generateMetadata } from './custom-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotKeywordPage />;
}
