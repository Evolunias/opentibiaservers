import SabrehavenQuestsKeywordPage, { generateMetadata } from './sabrehaven-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenQuestsKeywordPage />;
}
