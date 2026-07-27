import Tibia84HighExpWikiKeywordPage, { generateMetadata } from './tibia-8-4-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84HighExpWikiKeywordPage />;
}
