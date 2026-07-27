import Tibia76HighExpWikiKeywordPage, { generateMetadata } from './tibia-7-6-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76HighExpWikiKeywordPage />;
}
