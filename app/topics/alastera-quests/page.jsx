import AlasteraQuestsKeywordPage, { generateMetadata } from './alastera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraQuestsKeywordPage />;
}
