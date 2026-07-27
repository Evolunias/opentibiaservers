import EterniaAlternativesKeywordPage, { generateMetadata } from './eternia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaAlternativesKeywordPage />;
}
