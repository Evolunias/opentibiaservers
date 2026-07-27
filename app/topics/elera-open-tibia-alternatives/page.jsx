import EleraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './elera-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraOpenTibiaAlternativesKeywordPage />;
}
