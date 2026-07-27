import OriginaltibiaAlternativesKeywordPage, { generateMetadata } from './originaltibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaAlternativesKeywordPage />;
}
