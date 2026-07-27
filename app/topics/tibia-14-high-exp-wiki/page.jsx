import Tibia14HighExpWikiKeywordPage, { generateMetadata } from './tibia-14-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpWikiKeywordPage />;
}
