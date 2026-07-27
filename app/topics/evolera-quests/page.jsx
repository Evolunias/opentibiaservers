import EvoleraQuestsKeywordPage, { generateMetadata } from './evolera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraQuestsKeywordPage />;
}
