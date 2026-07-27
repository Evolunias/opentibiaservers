import LumineraQuestsKeywordPage, { generateMetadata } from './luminera-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraQuestsKeywordPage />;
}
