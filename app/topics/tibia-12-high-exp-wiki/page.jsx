import Tibia12HighExpWikiKeywordPage, { generateMetadata } from './tibia-12-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpWikiKeywordPage />;
}
