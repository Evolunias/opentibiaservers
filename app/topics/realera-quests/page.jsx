import RealeraQuestsKeywordPage, { generateMetadata } from './realera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraQuestsKeywordPage />;
}
