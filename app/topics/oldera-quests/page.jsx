import OlderaQuestsKeywordPage, { generateMetadata } from './oldera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaQuestsKeywordPage />;
}
