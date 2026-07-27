import SeasonalWikiUsaKeywordPage, { generateMetadata } from './seasonal-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiUsaKeywordPage />;
}
