import MistOfDeathAlternativesKeywordPage, { generateMetadata } from './mist-of-death-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathAlternativesKeywordPage />;
}
