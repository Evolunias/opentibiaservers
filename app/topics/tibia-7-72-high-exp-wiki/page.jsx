import Tibia772HighExpWikiKeywordPage, { generateMetadata } from './tibia-7-72-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772HighExpWikiKeywordPage />;
}
