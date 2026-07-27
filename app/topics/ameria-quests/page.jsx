import AmeriaQuestsKeywordPage, { generateMetadata } from './ameria-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaQuestsKeywordPage />;
}
