import EternalOdysseyQuestsKeywordPage, { generateMetadata } from './eternal-odyssey-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyQuestsKeywordPage />;
}
