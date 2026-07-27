import NepreniaQuestsKeywordPage, { generateMetadata } from './neprenia-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaQuestsKeywordPage />;
}
