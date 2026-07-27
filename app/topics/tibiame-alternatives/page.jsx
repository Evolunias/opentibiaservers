import TibiameAlternativesKeywordPage, { generateMetadata } from './tibiame-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameAlternativesKeywordPage />;
}
