import OriginaltibiaQuestsKeywordPage, { generateMetadata } from './originaltibia-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaQuestsKeywordPage />;
}
