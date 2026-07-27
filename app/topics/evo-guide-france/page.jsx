import EvoGuideFranceKeywordPage, { generateMetadata } from './evo-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoGuideFranceKeywordPage />;
}
