import JameraAlternativesKeywordPage, { generateMetadata } from './jamera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraAlternativesKeywordPage />;
}
