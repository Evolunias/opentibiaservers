import BaiakIlusionQuestsKeywordPage, { generateMetadata } from './baiak-ilusion-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionQuestsKeywordPage />;
}
