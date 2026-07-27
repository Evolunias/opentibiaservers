import AldoraAlternativesKeywordPage, { generateMetadata } from './aldora-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraAlternativesKeywordPage />;
}
