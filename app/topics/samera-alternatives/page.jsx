import SameraAlternativesKeywordPage, { generateMetadata } from './samera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraAlternativesKeywordPage />;
}
