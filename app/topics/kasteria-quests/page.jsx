import KasteriaQuestsKeywordPage, { generateMetadata } from './kasteria-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaQuestsKeywordPage />;
}
