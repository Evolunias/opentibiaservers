import EterniaOpenTibiaAlternativesKeywordPage, { generateMetadata } from './eternia-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaOpenTibiaAlternativesKeywordPage />;
}
