import HighExpSeasonMexicoKeywordPage, { generateMetadata } from './high-exp-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonMexicoKeywordPage />;
}
