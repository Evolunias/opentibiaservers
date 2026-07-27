import OfficialThorniaWikiKeywordPage, { generateMetadata } from './official-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaWikiKeywordPage />;
}
