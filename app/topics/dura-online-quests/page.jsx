import DuraOnlineQuestsKeywordPage, { generateMetadata } from './dura-online-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineQuestsKeywordPage />;
}
