import AsteraAlternativesKeywordPage, { generateMetadata } from './astera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraAlternativesKeywordPage />;
}
