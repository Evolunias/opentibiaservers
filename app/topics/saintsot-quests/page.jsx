import SaintsotQuestsKeywordPage, { generateMetadata } from './saintsot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotQuestsKeywordPage />;
}
