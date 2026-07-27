import CalmeraOtQuestsKeywordPage, { generateMetadata } from './calmera-ot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtQuestsKeywordPage />;
}
