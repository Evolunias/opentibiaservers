import Tibia13EvoWikiKeywordPage, { generateMetadata } from './tibia-13-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoWikiKeywordPage />;
}
