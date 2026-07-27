import BlazeraQuestsKeywordPage, { generateMetadata } from './blazera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraQuestsKeywordPage />;
}
