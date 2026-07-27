import MediviaQuestsKeywordPage, { generateMetadata } from './medivia-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaQuestsKeywordPage />;
}
