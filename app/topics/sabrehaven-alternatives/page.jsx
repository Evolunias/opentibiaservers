import SabrehavenAlternativesKeywordPage, { generateMetadata } from './sabrehaven-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenAlternativesKeywordPage />;
}
