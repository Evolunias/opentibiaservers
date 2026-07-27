import IsaraAlternativesKeywordPage, { generateMetadata } from './isara-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraAlternativesKeywordPage />;
}
