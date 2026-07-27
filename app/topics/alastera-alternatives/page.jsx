import AlasteraAlternativesKeywordPage, { generateMetadata } from './alastera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraAlternativesKeywordPage />;
}
