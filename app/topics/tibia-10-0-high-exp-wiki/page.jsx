import Tibia100HighExpWikiKeywordPage, { generateMetadata } from './tibia-10-0-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpWikiKeywordPage />;
}
