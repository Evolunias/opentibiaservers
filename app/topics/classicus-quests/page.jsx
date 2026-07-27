import ClassicusQuestsKeywordPage, { generateMetadata } from './classicus-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusQuestsKeywordPage />;
}
