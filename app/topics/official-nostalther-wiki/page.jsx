import OfficialNostaltherWikiKeywordPage, { generateMetadata } from './official-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherWikiKeywordPage />;
}
