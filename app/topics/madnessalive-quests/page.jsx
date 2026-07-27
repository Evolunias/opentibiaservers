import MadnessaliveQuestsKeywordPage, { generateMetadata } from './madnessalive-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveQuestsKeywordPage />;
}
