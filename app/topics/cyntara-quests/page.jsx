import CyntaraQuestsKeywordPage, { generateMetadata } from './cyntara-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraQuestsKeywordPage />;
}
