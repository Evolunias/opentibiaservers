import DanubiaOpenTibiaAlternativesKeywordPage, { generateMetadata } from './danubia-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaOpenTibiaAlternativesKeywordPage />;
}
