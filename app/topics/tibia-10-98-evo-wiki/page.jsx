import Tibia1098EvoWikiKeywordPage, { generateMetadata } from './tibia-10-98-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098EvoWikiKeywordPage />;
}
