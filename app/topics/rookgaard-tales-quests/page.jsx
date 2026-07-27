import RookgaardTalesQuestsKeywordPage, { generateMetadata } from './rookgaard-tales-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesQuestsKeywordPage />;
}
