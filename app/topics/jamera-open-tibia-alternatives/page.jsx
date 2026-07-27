import JameraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './jamera-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraOpenTibiaAlternativesKeywordPage />;
}
