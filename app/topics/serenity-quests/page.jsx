import SerenityQuestsKeywordPage, { generateMetadata } from './serenity-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityQuestsKeywordPage />;
}
