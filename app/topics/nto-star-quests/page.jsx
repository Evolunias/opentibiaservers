import NtoStarQuestsKeywordPage, { generateMetadata } from './nto-star-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarQuestsKeywordPage />;
}
