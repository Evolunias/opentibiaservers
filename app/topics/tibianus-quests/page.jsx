import TibianusQuestsKeywordPage, { generateMetadata } from './tibianus-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusQuestsKeywordPage />;
}
