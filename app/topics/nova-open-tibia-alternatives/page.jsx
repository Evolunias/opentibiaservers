import NovaOpenTibiaAlternativesKeywordPage, { generateMetadata } from './nova-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaOpenTibiaAlternativesKeywordPage />;
}
