import AureraGlobalQuestsKeywordPage, { generateMetadata } from './aurera-global-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalQuestsKeywordPage />;
}
