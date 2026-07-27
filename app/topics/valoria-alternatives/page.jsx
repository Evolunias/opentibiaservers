import ValoriaAlternativesKeywordPage, { generateMetadata } from './valoria-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaAlternativesKeywordPage />;
}
