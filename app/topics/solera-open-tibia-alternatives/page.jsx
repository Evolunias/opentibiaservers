import SoleraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './solera-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraOpenTibiaAlternativesKeywordPage />;
}
