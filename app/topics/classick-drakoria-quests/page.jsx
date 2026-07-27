import ClassickDrakoriaQuestsKeywordPage, { generateMetadata } from './classick-drakoria-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaQuestsKeywordPage />;
}
