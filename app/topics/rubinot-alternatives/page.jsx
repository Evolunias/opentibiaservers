import RubinotAlternativesKeywordPage, { generateMetadata } from './rubinot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotAlternativesKeywordPage />;
}
