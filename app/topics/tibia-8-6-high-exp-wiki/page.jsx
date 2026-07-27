import Tibia86HighExpWikiKeywordPage, { generateMetadata } from './tibia-8-6-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86HighExpWikiKeywordPage />;
}
