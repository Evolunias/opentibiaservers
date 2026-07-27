import ClassicusAlternativesKeywordPage, { generateMetadata } from './classicus-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusAlternativesKeywordPage />;
}
