import ValoriaOpenTibiaAlternativesKeywordPage, { generateMetadata } from './valoria-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaOpenTibiaAlternativesKeywordPage />;
}
