import ThorniaAlternativesKeywordPage, { generateMetadata } from './thornia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaAlternativesKeywordPage />;
}
