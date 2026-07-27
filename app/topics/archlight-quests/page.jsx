import ArchlightQuestsKeywordPage, { generateMetadata } from './archlight-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightQuestsKeywordPage />;
}
