import Tibia80HighExpWikiKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpWikiKeywordPage />;
}
