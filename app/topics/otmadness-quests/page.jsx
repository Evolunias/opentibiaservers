import OtmadnessQuestsKeywordPage, { generateMetadata } from './otmadness-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessQuestsKeywordPage />;
}
