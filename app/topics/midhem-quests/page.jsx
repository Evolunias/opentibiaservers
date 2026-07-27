import MidhemQuestsKeywordPage, { generateMetadata } from './midhem-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemQuestsKeywordPage />;
}
