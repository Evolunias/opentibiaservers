import InfernalOtQuestsKeywordPage, { generateMetadata } from './infernal-ot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtQuestsKeywordPage />;
}
