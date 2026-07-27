import NostaltherAlternativesKeywordPage, { generateMetadata } from './nostalther-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherAlternativesKeywordPage />;
}
