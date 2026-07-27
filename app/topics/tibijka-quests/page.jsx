import TibijkaQuestsKeywordPage, { generateMetadata } from './tibijka-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaQuestsKeywordPage />;
}
