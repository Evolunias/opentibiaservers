import Tibia15HighExpWikiKeywordPage, { generateMetadata } from './tibia-15-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpWikiKeywordPage />;
}
