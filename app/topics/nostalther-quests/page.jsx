import NostaltherQuestsKeywordPage, { generateMetadata } from './nostalther-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherQuestsKeywordPage />;
}
