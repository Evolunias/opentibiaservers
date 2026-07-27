import Tibia96HighExpWikiKeywordPage, { generateMetadata } from './tibia-9-6-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96HighExpWikiKeywordPage />;
}
