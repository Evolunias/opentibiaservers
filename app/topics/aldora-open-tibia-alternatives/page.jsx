import AldoraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './aldora-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraOpenTibiaAlternativesKeywordPage />;
}
