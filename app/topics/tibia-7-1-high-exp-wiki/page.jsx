import Tibia71HighExpWikiKeywordPage, { generateMetadata } from './tibia-7-1-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71HighExpWikiKeywordPage />;
}
