import ShadowcoresQuestsKeywordPage, { generateMetadata } from './shadowcores-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresQuestsKeywordPage />;
}
