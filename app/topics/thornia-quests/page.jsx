import ThorniaQuestsKeywordPage, { generateMetadata } from './thornia-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaQuestsKeywordPage />;
}
