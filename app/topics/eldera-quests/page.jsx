import ElderaQuestsKeywordPage, { generateMetadata } from './eldera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaQuestsKeywordPage />;
}
