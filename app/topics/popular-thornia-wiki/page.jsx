import PopularThorniaWikiKeywordPage, { generateMetadata } from './popular-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaWikiKeywordPage />;
}
