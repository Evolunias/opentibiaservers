import EvoGuideBrazilKeywordPage, { generateMetadata } from './evo-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideBrazilKeywordPage />;
}
