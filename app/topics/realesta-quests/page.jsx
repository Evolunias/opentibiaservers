import RealestaQuestsKeywordPage, { generateMetadata } from './realesta-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaQuestsKeywordPage />;
}
