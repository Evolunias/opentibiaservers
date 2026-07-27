import CoxaotQuestsKeywordPage, { generateMetadata } from './coxaot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotQuestsKeywordPage />;
}
