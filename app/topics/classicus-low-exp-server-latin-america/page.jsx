import ClassicusLowExpServerLatinAmericaKeywordPage, { generateMetadata } from './classicus-low-exp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLowExpServerLatinAmericaKeywordPage />;
}
