import HarmoniaOtQuestsKeywordPage, { generateMetadata } from './harmonia-ot-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtQuestsKeywordPage />;
}
