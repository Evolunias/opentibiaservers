import ClassickDrakoriaAlternativesKeywordPage, { generateMetadata } from './classick-drakoria-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaAlternativesKeywordPage />;
}
