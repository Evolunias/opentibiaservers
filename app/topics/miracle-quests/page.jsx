import MiracleQuestsKeywordPage, { generateMetadata } from './miracle-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleQuestsKeywordPage />;
}
