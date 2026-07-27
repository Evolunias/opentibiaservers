import ObsidiaAlternativesKeywordPage, { generateMetadata } from './obsidia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaAlternativesKeywordPage />;
}
