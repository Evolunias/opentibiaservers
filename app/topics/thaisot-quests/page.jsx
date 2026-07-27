import ThaisotQuestsKeywordPage, { generateMetadata } from './thaisot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotQuestsKeywordPage />;
}
