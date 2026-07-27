import RangerSArcaniQuestsKeywordPage, { generateMetadata } from './ranger-s-arcani-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniQuestsKeywordPage />;
}
