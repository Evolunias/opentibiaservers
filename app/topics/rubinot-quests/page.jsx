import RubinotQuestsKeywordPage, { generateMetadata } from './rubinot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotQuestsKeywordPage />;
}
