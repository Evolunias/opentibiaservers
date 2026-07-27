import NilotQuestsKeywordPage, { generateMetadata } from './nilot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotQuestsKeywordPage />;
}
