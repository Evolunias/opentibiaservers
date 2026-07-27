import EvoGuideMexicoKeywordPage, { generateMetadata } from './evo-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideMexicoKeywordPage />;
}
