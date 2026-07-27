import CanobQuestsKeywordPage, { generateMetadata } from './canob-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobQuestsKeywordPage />;
}
