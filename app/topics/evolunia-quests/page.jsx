import EvoluniaQuestsKeywordPage, { generateMetadata } from './evolunia-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaQuestsKeywordPage />;
}
