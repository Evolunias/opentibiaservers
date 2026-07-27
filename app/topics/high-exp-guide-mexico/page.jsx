import HighExpGuideMexicoKeywordPage, { generateMetadata } from './high-exp-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideMexicoKeywordPage />;
}
