import TibiaoriginsQuestsKeywordPage, { generateMetadata } from './tibiaorigins-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsQuestsKeywordPage />;
}
