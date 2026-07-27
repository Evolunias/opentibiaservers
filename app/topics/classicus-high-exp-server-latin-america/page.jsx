import ClassicusHighExpServerLatinAmericaKeywordPage, { generateMetadata } from './classicus-high-exp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusHighExpServerLatinAmericaKeywordPage />;
}
