import TibiameQuestsKeywordPage, { generateMetadata } from './tibiame-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameQuestsKeywordPage />;
}
