import LumineraAlternativesKeywordPage, { generateMetadata } from './luminera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraAlternativesKeywordPage />;
}
