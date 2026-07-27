import HighExpGuideFranceKeywordPage, { generateMetadata } from './high-exp-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideFranceKeywordPage />;
}
