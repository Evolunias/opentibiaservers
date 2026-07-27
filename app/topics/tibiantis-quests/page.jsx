import TibiantisQuestsKeywordPage, { generateMetadata } from './tibiantis-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisQuestsKeywordPage />;
}
