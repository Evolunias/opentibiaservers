import EmpirebrQuestsKeywordPage, { generateMetadata } from './empirebr-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrQuestsKeywordPage />;
}
