import OxygenotQuestsKeywordPage, { generateMetadata } from './oxygenot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotQuestsKeywordPage />;
}
