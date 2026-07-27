import TibiascapeQuestsKeywordPage, { generateMetadata } from './tibiascape-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeQuestsKeywordPage />;
}
