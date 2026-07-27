import MistOfDeathQuestsKeywordPage, { generateMetadata } from './mist-of-death-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathQuestsKeywordPage />;
}
