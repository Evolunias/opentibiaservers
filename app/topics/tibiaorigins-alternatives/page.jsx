import TibiaoriginsAlternativesKeywordPage, { generateMetadata } from './tibiaorigins-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsAlternativesKeywordPage />;
}
