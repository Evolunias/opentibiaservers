import RuberaAlternativesKeywordPage, { generateMetadata } from './rubera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaAlternativesKeywordPage />;
}
