import AureraGlobalAlternativesKeywordPage, { generateMetadata } from './aurera-global-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalAlternativesKeywordPage />;
}
