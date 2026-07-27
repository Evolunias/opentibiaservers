import LowExpGuideFranceKeywordPage, { generateMetadata } from './low-exp-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideFranceKeywordPage />;
}
